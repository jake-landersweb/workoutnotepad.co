package main

import (
	"fmt"
	"net/http"
	"os"
	"text/template"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/jake-landersweb/workoutnotepad.co/src/events"
	"github.com/jake-landersweb/workoutnotepad.co/src/markdown"
	"github.com/jake-landersweb/workoutnotepad.co/src/routes"
	"github.com/jake-landersweb/workoutnotepad.co/src/xtempl"
)

func init() {
	xtempl.XT = xtempl.New()

	funcMap := template.FuncMap{
		"dict": func(values ...interface{}) (map[string]interface{}, error) {
			if len(values)%2 != 0 {
				return nil, fmt.Errorf("invalid dict call")
			}
			dict := make(map[string]interface{}, len(values)/2)
			for i := 0; i < len(values); i += 2 {
				key, ok := values[i].(string)
				if !ok {
					return nil, fmt.Errorf("dict keys must be strings")
				}
				dict[key] = values[i+1]
			}
			return dict, nil
		},
	}
	xtempl.XT.Funcs(funcMap)
	if err := xtempl.XT.ParseDir("templates/", []string{".html"}); err != nil {
		fmt.Printf("There was an issue parsing the templates: %s\n", err)
		os.Exit(1)
	}
}

func main() {
	r := chi.NewRouter()

	// middleware
	r.Use(middleware.Logger)
	r.Use(middleware.Compress(5, "text/html", "text/css", "text/javascript"))
	r.Use(middleware.RedirectSlashes)

	// file servers
	fsPublic := http.FileServer(http.Dir("./public"))

	// staic handlers
	r.Handle("/public/*", http.StripPrefix("/public", fsPublic))

	// templates
	// templates = template.Must(template.ParseGlob("templates/**/*.html"))

	/*
		##############################################################################
		# Custom handlers
		##############################################################################
	*/
	r.NotFound(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(404)
		w.Header().Add("Content-Type", "text/html")
		if err := xtempl.XT.ExecuteTemplate(w, "404.html", nil); err != nil {
			fmt.Println(err)
			http.Error(w, "There was an issue rendering the template", http.StatusInternalServerError)
		}
	})

	/*
		##############################################################################
		# Static assets
		##############################################################################
	*/
	r.Get("/favicon.ico", func(w http.ResponseWriter, r *http.Request) {
		file, err := os.ReadFile("./public/images/favicon.ico")
		if err != nil {
			fmt.Println(err)
			w.WriteHeader(404)
			w.Write([]byte("Could not find"))
			return
		}
		w.Header().Set("Content-Type", "image/x-icon")
		w.Write(file)
	})

	/*
		##############################################################################
		# Routes
		##############################################################################
	*/
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html")
		if err := xtempl.XT.ExecuteTemplate(w, "index.html", nil); err != nil {
			fmt.Println(err)
			http.Error(w, "There was an issue rendering the template", http.StatusInternalServerError)
		}
	})

	r.Get("/screenshots", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html")
		if err := xtempl.XT.ExecuteTemplate(w, "screenshots.html", nil); err != nil {
			fmt.Println(err)
			http.Error(w, "There was an issue rendering the template", http.StatusInternalServerError)
		}
	})

	r.Get("/privacy-policy", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html")
		md, err := markdown.RenderMarkdown("./public/markdown/privacy-policy.md")
		if err != nil {
			fmt.Println(err)
			http.Error(w, "There was an issue rendering the markdown", http.StatusInternalServerError)
			return
		}

		fmt.Println(string(md.Headers))

		if err := xtempl.XT.ExecuteTemplate(w, "markdown.html", md); err != nil {
			fmt.Println(err)
			http.Error(w, "There was an issue rendering the template", http.StatusInternalServerError)
		}
	})

	r.Get("/support", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html")
		if err := xtempl.XT.ExecuteTemplate(w, "support.html", nil); err != nil {
			fmt.Println(err)
			http.Error(w, "There was an issue rendering the template", http.StatusInternalServerError)
		}
	})

	r.Get("/premium", routes.Premium)

	/*
		##############################################################################
		# Events
		##############################################################################
	*/
	r.Route("/events", func(r chi.Router) {
		r.Get("/test", func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Content-Type", "text/html")
			if err := xtempl.XT.ExecuteTemplate(w, "test", nil); err != nil {
				fmt.Println(err)
				http.Error(w, "There was an issue rendering the template", http.StatusInternalServerError)
			}
		})

		r.Post("/send-support-form", func(w http.ResponseWriter, r *http.Request) {
			msg, status := events.EventSupportForm(w, r)
			w.WriteHeader(status)
			w.Header().Add("Content-Type", "text/html")
			w.Write([]byte(fmt.Sprintf("<p>%s</p>", msg)))
		})
	})

	// serve
	fmt.Println(http.ListenAndServe(":3000", r))
}
