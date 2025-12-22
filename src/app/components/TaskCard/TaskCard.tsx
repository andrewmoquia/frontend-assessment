'use client';

import { Box, Checkbox, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/redux/store';
import { fetchDeleteTask, fetchUpdateTask } from '@/app/redux/slices/taskSlice';
import { Task } from '@/app/actions/task.actions';

import { TaskCardContainer } from './styles';

export type TaskCardProps = {
    task: Task;
    onEdit: () => void;
};

const TaskCard = ({ task, onEdit }: TaskCardProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleCompleteTask = () => {
        dispatch(fetchUpdateTask({ ...task, isCompleted: !task.isCompleted }));
    };

    const handleDeleteTask = () => {
        dispatch(fetchDeleteTask({ id: task.id }));
    };

    return (
        <TaskCardContainer check={task.isCompleted}>
            <Box className="header-wrapper">
                <Checkbox checked={!!task.isCompleted} onClick={handleCompleteTask} />
                <Typography variant="h2">{task.taskName}</Typography>
            </Box>
            <Box className="description-wrapper">
                <Typography>{task.taskDescription}</Typography>
            </Box>
            <Box className="hover-icons-wrapper">
                <IconButton className="icon-button" onClick={onEdit}>
                    <EditIcon className="icon" />
                </IconButton>
                <IconButton className="icon-button" onClick={handleDeleteTask}>
                    <DeleteIcon className="icon" />
                </IconButton>
            </Box>
        </TaskCardContainer>
    );
};

export default TaskCard;
