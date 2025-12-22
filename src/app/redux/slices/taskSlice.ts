import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getTasks, createTask, deleteTask, updateTask, Task } from '@/app/actions/task.actions';

interface TaskState {
    tasks: Task[];
    loading: boolean;
    error: string | null;
}

const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: null,
};

export const fetchAllTasks = createAsyncThunk<Task[], string | undefined>(
    'task/fetchAll',
    async (search) => {
        return await getTasks(search);
    },
);

export const fetchCreateTask = createAsyncThunk<
    Task,
    { taskName: string; taskDescription: string }
>('task/createTask', async (body) => {
    return await createTask(body);
});

export const fetchDeleteTask = createAsyncThunk<Task, { id: string }>(
    'task/deleteTask',
    async (body) => {
        return await deleteTask(body.id);
    },
);

export const fetchUpdateTask = createAsyncThunk<
    Task,
    { id: string; taskName: string; taskDescription: string; isCompleted: boolean }
>('task/updateTask', async (body) => {
    return await updateTask({ ...body });
});

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchAllTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchAllTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks';
            })

            .addCase(fetchCreateTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCreateTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks.unshift(action.payload);
            })
            .addCase(fetchCreateTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks';
            })

            .addCase(fetchDeleteTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDeleteTask.fulfilled, (state, action) => {
                console.log({ action: action.payload });
                state.loading = false;
                state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
            })
            .addCase(fetchDeleteTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks';
            })

            .addCase(fetchUpdateTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUpdateTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task,
                );
            })
            .addCase(fetchUpdateTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks';
            });
    },
});

export default taskSlice.reducer;
