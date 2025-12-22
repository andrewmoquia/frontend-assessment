'use client';

import { useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '@/app/components/Button/Button';
import { AppDispatch, RootState } from '@/app/redux/store';
import { fetchCreateTask, fetchUpdateTask } from '@/app/redux/slices/taskSlice';
import { Task } from '@/app/actions/task.actions';

import { CreateUpdateModalContainer } from './styles';

type FormValues = {
    taskName: string;
    taskDescription: string;
};

type CreateUpdateModalProps = {
    open: boolean;
    onClose: () => void;
    task: Task;
};

const CreateUpdateModal = ({ open = false, onClose = () => {}, task }: CreateUpdateModalProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading } = useSelector((state: RootState) => state.tasks);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            taskName: '',
            taskDescription: '',
        },
    });

    const onSubmit = (data: FormValues) => {
        if (task.id) {
            dispatch(
                fetchUpdateTask({
                    ...task,
                    taskName: data.taskName,
                    taskDescription: data.taskDescription,
                }),
            );
        } else {
            dispatch(fetchCreateTask(data));
        }

        reset();
        onClose();
    };

    useEffect(() => {
        if (open) {
            reset({
                taskName: task?.taskName ?? '',
                taskDescription: task?.taskDescription ?? '',
            });
        }
    }, [open, task, reset]);

    return (
        <CreateUpdateModalContainer open={open} onClose={onClose}>
            <Box
                className="modal-wrapper"
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <Controller
                    name="taskName"
                    control={control}
                    rules={{ required: 'Task name is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            value={field.value ?? ''}
                            label="Task Name"
                            fullWidth
                            margin="normal"
                            error={!!errors.taskName}
                            helperText={errors.taskName?.message}
                        />
                    )}
                />
                <Controller
                    name="taskDescription"
                    control={control}
                    rules={{ required: 'Task description is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            value={field.value ?? ''}
                            multiline
                            minRows={4}
                            maxRows={8}
                            label="Task Description"
                            fullWidth
                            margin="normal"
                            error={!!errors.taskDescription}
                            helperText={errors.taskDescription?.message}
                        />
                    )}
                />
                <CustomButton type="submit" fullWidth={true} disabled={loading}>
                    <Typography variant="buttonText">
                        {task.id ? 'Update Task' : 'Create Task'}
                    </Typography>
                </CustomButton>
            </Box>
        </CreateUpdateModalContainer>
    );
};

export default CreateUpdateModal;
