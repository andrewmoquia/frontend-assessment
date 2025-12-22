import api from '@/lib/api';

export type Task = {
    id: string;
    taskName: string;
    taskDescription: string;
    isCompleted: boolean;
    createdAt: string;
    updatedAt: string;
};

export type TaskParams = {
    id?: string;
    taskName?: string;
    taskDescription?: string;
    isCompleted?: boolean;
};

export const getTasks = async (search?: string): Promise<Task[]> => {
    const params = search ? `?search=${encodeURIComponent(search)}` : '';
    const response = await api.get<Task[]>(`/task${params}`);
    return response.data;
};

export const createTask = async ({ taskName, taskDescription }: TaskParams) => {
    const response = await api.post<Task>('/task', { taskName, taskDescription });
    return response.data;
};

export const updateTask = async ({
    id,
    taskName,
    taskDescription,
    isCompleted,
}: TaskParams): Promise<Task> => {
    const response = await api.put<Task>('/task', { id, taskName, taskDescription, isCompleted });
    return response.data;
};

export const deleteTask = async (id: string): Promise<Task> => {
    const response = await api.delete('/task', { data: { id } });
    return response.data;
};
