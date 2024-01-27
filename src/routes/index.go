package routes

import (
	"fmt"
	"net/http"

	"github.com/jake-landersweb/workoutnotepad.co/src/xtempl"
)

func Index(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	items := []*PremiumCell{
		{
			Title:   "Create Your Custom Workouts",
			Desc:    "The easy to use workout creation tool in Workout Notepad allows you to create your workouts like playlists in a song. Create and add your exercises as individual items, or in blocks as super sets.",
			Src:     "/public/images/screenshots/create-workout.png",
			Alt:     "Create Workout",
			NoStyle: true,
		},
		{
			Title:   "Launch Your Workouts",
			Desc:    "Tracking your workout progression has never been easier. Simply launch your workout in the app, and Workout Notepad takes care of the rest. Once you are done, save your workout and your data is instantly saved and ready for visualization.",
			Src:     "/public/images/previews/launch-single-exercise.png",
			Alt:     "Launch Workout",
			NoStyle: false,
		},
		{
			Title:   "Visualize",
			Desc:    "Once your workout is finished, Workout Notepad will automatically generate a detailed report you can save and share anywhere! In addition, all the individual exercises you completed can be graphed, visualized, and compared across performance and time.",
			Src:     "/public/images/screenshots/post-workout.png",
			Alt:     "Visualize Workout",
			NoStyle: true,
		},
	}

	for idx, item := range items {
		item.Rev = idx%2 == 0
	}

	body := map[string]any{"Items": items}

	if err := xtempl.XT.ExecuteTemplate(w, "index.html", &body); err != nil {
		fmt.Println(err)
		http.Error(w, "There was an issue rendering the template", http.StatusInternalServerError)
	}
}
