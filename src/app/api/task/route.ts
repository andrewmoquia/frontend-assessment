import { NextResponse } from 'next/server';

import sql from '@/lib/db';

export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const search = url.searchParams.get('search')?.trim();

        let tasks;

        if (search) {
            tasks = await sql`
                SELECT * FROM task
                WHERE task_name ILIKE ${`%${search}%`}
                ORDER BY updated_at DESC
            `;
        } else {
            tasks = await sql`SELECT * FROM task ORDER BY updated_at DESC`;
        }

        const formattedTasks = tasks.map((task) => ({
            id: task.id,
            taskName: task.task_name,
            taskDescription: task.task_description,
            createdAt: task.created_at,
            updatedAt: task.updated_at,
            isCompleted: task.is_completed,
        }));

        return NextResponse.json(formattedTasks, { status: 200 });
    } catch (error) {
        console.error('GET /api/task error:', error);
        return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { taskName, taskDescription } = await req.json();

        if (!taskName || !taskDescription) {
            return NextResponse.json(
                { error: 'taskName and taskDescription are required' },
                { status: 400 },
            );
        }

        const [task] = await sql`
          INSERT INTO task (task_name, task_description)
          VALUES (${taskName}, ${taskDescription})
          RETURNING *;
        `;

        const formattedTask = {
            id: task.id,
            taskName: task.task_name,
            taskDescription: task.task_description,
            createdAt: task.created_at,
            updatedAt: task.updated_at,
            isCompleted: task.is_completed,
        };

        return NextResponse.json(formattedTask, { status: 201 });
    } catch (error) {
        console.error('POST /api/task error:', error);
        return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const { id, taskName, taskDescription, isCompleted } = await req.json();

        if (!id || !taskName || !taskDescription) {
            return NextResponse.json(
                { error: 'id, taskName and taskDescription are required' },
                { status: 400 },
            );
        }
        const [task] = await sql`
          UPDATE task
          SET
            task_name = ${taskName},
            task_description = ${taskDescription},
            is_completed = ${isCompleted},
            updated_at = now()
          WHERE id = ${id}
          RETURNING *;
        `;

        if (!task) {
            return NextResponse.json({ error: 'Task not found' }, { status: 404 });
        }

        const formattedTask = {
            id: task.id,
            taskName: task.task_name,
            taskDescription: task.task_description,
            createdAt: task.created_at,
            updatedAt: task.updated_at,
            isCompleted: task.is_completed,
        };

        return NextResponse.json(formattedTask, { status: 200 });
    } catch (error) {
        console.error('PUT /api/task error:', error);
        return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: 'id is required' }, { status: 400 });
        }

        const [task] = await sql`DELETE FROM task WHERE id = ${id} RETURNING *;`;

        const formattedTask = {
            id: task.id,
            taskName: task.task_name,
            taskDescription: task.task_description,
            createdAt: task.created_at,
            updatedAt: task.updated_at,
            isCompleted: task.is_completed,
        };

        return NextResponse.json({ ...formattedTask, message: 'Task deleted' }, { status: 200 });
    } catch (error) {
        console.error('DELETE /api/task error:', error);
        return NextResponse.json({ error: 'Failed to delete task' }, { status: 500 });
    }
}
