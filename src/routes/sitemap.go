package routes

import (
	"encoding/xml"
	"net/http"
	"time"
)

// URLSet is a container for the set of URLs.
type URLSet struct {
	XMLName xml.Name `xml:"urlset"`
	Xmlns   string   `xml:"xmlns,attr"`
	URLs    []URL    `xml:"url"`
}

// URL is the data structure for each URL entry.
type URL struct {
	Loc        string    `xml:"loc"`
	LastMod    time.Time `xml:"lastmod"`
	ChangeFreq string    `xml:"changefreq"`
	Priority   float64   `xml:"priority"`
}

func Sitemap(w http.ResponseWriter, r *http.Request) {
	urls := URLSet{
		Xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
		URLs: []URL{
			{Loc: "http://workoutnotepad.co/", LastMod: time.Now(), ChangeFreq: "daily", Priority: 1.0},
			{Loc: "http://workoutnotepad.co/premium", LastMod: time.Now(), ChangeFreq: "daily", Priority: 1.0},
			{Loc: "http://workoutnotepad.co/screenshots", LastMod: time.Now(), ChangeFreq: "daily", Priority: 1.0},
			{Loc: "http://workoutnotepad.co/privacy-policy", LastMod: time.Now(), ChangeFreq: "daily", Priority: 1.0},
			{Loc: "http://workoutnotepad.co/support", LastMod: time.Now(), ChangeFreq: "daily", Priority: 1.0},
		},
	}

	w.Header().Set("Content-Type", "text/xml")
	enc := xml.NewEncoder(w)
	enc.Indent("", "  ")
	if err := enc.Encode(urls); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
