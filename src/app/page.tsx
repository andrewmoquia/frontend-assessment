'use client';

import { Backdrop, Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavigationBar from '@/app/components/NavigationBar.tsx/NavigationBar';
import TaskCard from '@/app/components/TaskCard/TaskCard';
import CreateUpdateModal from '@/app/components/Modals/CreateUpdateModal';
import { RootState, AppDispatch } from '@/app/redux/store';
import { fetchAllTasks } from '@/app/redux/slices/taskSlice';

import { HomeContainer } from './styles';
import { Task } from './actions/task.actions';

const emptyTask = {
    id: '',
    taskName: '',
    taskDescription: '',
    isCompleted: false,
    createdAt: '',
    updatedAt: '',
};

export default function Home() {
    const dispatch = useDispatch<AppDispatch>();

    const { tasks, loading } = useSelector((state: RootState) => state.tasks);
    const [openModal, setOpenModal] = useState(false);
    const [task, setTask] = useState<Task>(emptyTask);

    const onClick = () => {
        setTask(emptyTask);
        setOpenModal(!openModal);
    };

    const handleTaskCardEdit = (task: Task) => {
        setTask(task);
        setOpenModal(!openModal);
    };

    useEffect(() => {
        dispatch(fetchAllTasks());
    }, [dispatch]);

    return (
        <HomeContainer>
            <Backdrop
                open={loading}
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <NavigationBar onClick={onClick} />
            <CreateUpdateModal open={openModal} onClose={onClick} task={task} />
            <Box className="task-card-container">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} onEdit={() => handleTaskCardEdit(task)} />
                ))}
            </Box>
        </HomeContainer>
    );
}
