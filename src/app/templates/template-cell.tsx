import { lightenHex } from "@/lib/colors";
import { WorkoutExercise, WorkoutTemplate } from "@/types/template";

interface WorkoutCellProps {
    t: WorkoutTemplate;
}

const ViewTemplateCell: React.FC<WorkoutCellProps> = ({ t }) => {
    const { template, exercises } = t;

    // Helper: format level to use in the level cell.
    const LevelCell: React.FC<{ level: string }> = ({ level }) => {
        // very simple color mapping based on level
        let backgroundColor = "#ddd";
        let borderColor = "#aaa";
        let textColor = "#555";

        switch (level.toLowerCase()) {
            case "beginner":
                backgroundColor = "#d0f0c0";
                borderColor = "#8bc34a";
                textColor = "#388e3c";
                break;
            case "intermediate":
                backgroundColor = "#fff9c4";
                borderColor = "#fbc02d";
                textColor = "#f57f17";
                break;
            case "advanced":
                backgroundColor = "#ffcdd2";
                borderColor = "#e57373";
                textColor = "#d32f2f";
                break;
            default:
                backgroundColor = "#eee";
                borderColor = "#ccc";
                textColor = "#666";
        }

        return (
            <div
                style={{
                    display: "inline-block",
                    backgroundColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "50px",
                    padding: "2px 8px",
                    marginRight: "4px",
                    fontSize: "12px",
                    color: textColor,
                }}
            >
                {level.charAt(0).toUpperCase() + level.slice(1)}
            </div>
        );
    };

    // Helper: time cell
    const TimeCell: React.FC<{ time: string }> = ({ time }) => {
        return (
            <div
                style={{
                    display: "inline-block",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    border: "1px solid rgba(0, 0, 0, 0.5)",
                    borderRadius: "50px",
                    padding: "2px 8px",
                    fontSize: "12px",
                    color: "rgba(0, 0, 0, 0.5)",
                    marginLeft: "4px",
                }}
            >
                {time}
            </div>
        );
    };

    // Helper: renders an exercise cell row.
    const ExerciseCell: React.FC<{ exercise: WorkoutExercise }> = ({
        exercise,
    }) => {
        // For the icon, if available render an img. Adjust the icon URL as needed.
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "6px",
                }}
            >
                <span className="text-sm">
                    - {exercise.title}
                </span>
            </div>
        );
    };

    // Render a flat list of exercises (limit to 3 across all nested arrays)
    const flatExercises: WorkoutExercise[] = exercises.flat().slice(0, 3);

    return (
        <div
            key={template.id}
            className="border rounded-2xl p-4 w-full"
            style={{
                backgroundColor: template.backgroundColor ? lightenHex(template.backgroundColor, 0.5) : "var(--color-muted)",
            }}
        >
            <div style={{ marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    {template.level && <LevelCell level={template.level} />}
                    {template.estTime && <TimeCell time={template.estTime} />}
                    <div style={{ flexGrow: 1 }}></div>
                    {/* Optionally add bookmark icon if needed. Otherwise, you could add another condition here. */}
                </div>
            </div>
            <div className="font-bold text-lg">
                {template.title}
            </div>
            {template.description && template.description.trim() !== "" && (
                <div className="txt-body">
                    {template.description}
                </div>
            )}
            <div className="pt-2">
                {flatExercises.map((ex) => (
                    <ExerciseCell key={ex.id} exercise={ex} />
                ))}
            </div>
        </div>
    );
};

export default ViewTemplateCell;