/* =========================
   VIEW (SSR)
   Tugas:
    1. Letakkan di file khusus, dalam folder yang sesuai
    2. Import UserModel
    3. Ganti elemen dalam <body> jadi:
    4. Build Tailwind ke style.css, pastikan path benar.
========================= */
import { UserModel } from "../models/user.model";

export const userView = (users: UserModel[]) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User List</title>
    <link href="/css/style.css" rel="stylesheet">
</head>
<body class="bg-gray-100 min-h-screen p-10">
    <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-blue-600 mb-6">User Management (Clean Structure)</h1>

        <form method="POST" action="/create" class="flex gap-2 mb-8">
            <input name="name" placeholder="Name" class="border border-gray-300 p-2 rounded-l w-full focus:ring-2 focus:ring-blue-500 outline-none" required/>
            <input name="role" placeholder="Role" class="border border-gray-300 p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none" required/>
            <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-r font-semibold hover:bg-blue-700 transition">
                Add
            </button>
        </form>

        <div class="space-y-4">
            ${users.map(user => `
                <div class="bg-white shadow-md border border-gray-100 rounded-lg p-5 flex justify-between items-center hover:shadow-lg transition">
                    <div>
                        <p class="font-bold text-xl text-gray-800">${user.displayName}</p>
                        <p class="text-sm text-gray-400 font-medium">ID: ${user.id}</p>
                    </div>
                    
                    <form method="POST" action="/delete/${user.id}">
                        <button type="submit" class="bg-red-500 text-white px-5 py-2 rounded-md font-bold text-sm hover:bg-red-600 transition shadow-sm">
                            Delete
                        </button>
                    </form>
                </div>
            `).join("")}
        </div>
    </div>
</body>
</html>
`;