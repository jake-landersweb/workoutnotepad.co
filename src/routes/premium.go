package routes

import (
	"fmt"
	"net/http"

	"github.com/jake-landersweb/workoutnotepad.co/src/xtempl"
)

func Premium(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	items := []*PremiumCell{
		{
			Title: "Comprehensive Exercise Graphs",
			Desc:  "View powerful yet flexible graphs on all of the exercises you have logged. View your reps or weight distribution grouped by either set number or date it was logged. Gone are the days of Excel charts and graphs, viewing your progress in an interactive way has never been easier.",
			Src:   "/public/images/previews/reps-graph-600px.png",
			Alt:   "Reps Graph",
		},
		{
			Title: "Workout Category Distribution",
			Desc:  "View powerful yet flexible graphs on all of the exercises you have logged. View your reps or weight distribution grouped by either set number or date it was logged. Gone are the days of Excel charts and graphs, viewing your progress in an interactive way has never been easier.",
			Src:   "/public/images/previews/categories-600px.png",
			Alt:   "Categories Graph",
		},
		{
			Title: "Per-Category Report",
			Desc:  "Comprehensive reports on all of your custom-defined categories including exercise distribution, maxes (reps, weight/time, sets), tags, and recently logged. These pages are created and updated automatically for your categories.",
			Src:   "/public/images/previews/category-600px.png",
			Alt:   "Category Page",
		},
		{
			Title: "Exercise Images/Videos",
			Desc:  "Attach images or videos to your exercises to keep track of which exercise is performed how! Upload these assets either from your photos app or camera, and add interactivity to your workouts today!",
			Src:   "/public/images/previews/image-600px.png",
			Alt:   "Exercise Images",
		},
		{
			Title: "Exercise Maxes",
			Desc:  "View a comprehensive max dashboard to show off to your lifting buddies. Keep track of your max weight, time, reps, and sets for all of your categories, and filter these by exercise type.",
			Src:   "/public/images/previews/maxes-600px.png",
			Alt:   "Exercises Maxes",
		},
		{
			Title: "Cloud Backups",
			Desc:  "Automatic data backup to the cloud! Every time your data changes or every 8 hours (whichever comes first) your app data is backed up to the cloud. Your last 10 backups are saved, and you can restore your app from any point in time.",
			Src:   "/public/images/previews/backup-600px.png",
			Alt:   "Cloud Backups",
		},
		{
			Title: "Tag Distribution",
			Desc:  "See how often you log your exercises by various tags as part of our exercise graph suite. Are you pushing yourself to failure enough? Combined with custom defined tags, this graph can be a powerful exercise quality indicator.",
			Src:   "/public/images/previews/tag-exercise-600px.png",
			Alt:   "Exercise Tags",
		},
		{
			Title: "Custom Categories and Tags",
			Desc:  "Make your app experience uniquely yours, define the custom tags and categories you want to label your exercises with. A subtle but powerful feature that allows you to track the things that matter most.",
			Src:   "/public/images/previews/tags-600px.png",
			Alt:   "Custom Tags and Categories",
		},
		{
			Title: "Workout Snapshots",
			Desc:  "After every workout, a snapshot will be taken of what your workout looked like for that day. Then over time, you can view how your workout has progressed, along with restoring your workout from a point in time. Let your workouts be fluid, and change them often!",
			Src:   "/public/images/previews/w-snapshots-600px.png",
			Alt:   "Workout Snapshots",
		},
	}

	for idx, item := range items {
		item.Rev = idx%2 == 0
	}

	if err := xtempl.XT.ExecuteTemplate(w, "premium.html", items); err != nil {
		fmt.Println(err)
		http.Error(w, "There was an issue rendering the template", http.StatusInternalServerError)
	}
}
