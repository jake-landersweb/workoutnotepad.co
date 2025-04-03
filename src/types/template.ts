export interface WTemplate {
    id: number;
    workoutId: string;
    title: string;
    description: string | null;
    keywords: string | null;
    metadata: any;
    level: string | null;
    estTime: string | null;
    backgroundColor: string | null;
    imageId: string | null;
    sha256: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface WorkoutExercise {
    category: number;
    title: string;
    description: string | null;
    difficulty: string | null;
    icon: string | null;
    type: number;
    isImport: boolean;
    id: number;
    workoutTemplateId: number;
    exerciseId: string;
    exerciseOrder: number;
    supersetId: string;
    supersetOrder: number;
    sets: number;
    reps: number;
    time: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface WorkoutTemplate {
    template: WTemplate;
    exercises: WorkoutExercise[][];
}