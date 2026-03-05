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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>User List</title>
  <link href="public/css/style.css" rel="stylesheet">
</head>
<body class="bg-gray-100 min-h-screen p-10">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold text-blue-600 mb-6">
        User Management (Clean Structure)
      </h1>

      <form method="POST" action="/create" class="mb-6 flex gap-2">
        <input name="name" placeholder="Name" class="border p-2 rounded w-full" required/>
        <input name="role" placeholder="Role" class="border p-2 rounded w-full" required/>
        <button type="submit" class="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">Add</button>
      </form>

      <div class="grid gap-4">
        ${users.map(user => `
          <div class="bg-white shadow rounded p-4 flex justify-between items-center">
            <div>
              <p class="font-semibold text-lg">${user.displayName}</p>
              <p class="text-xs text-gray-400">ID: ${user.id}</p>
            </div>
            <div class="flex gap-2">
              <form method="POST" action="/delete/${user.id}">
                <button type="submit" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
              </form>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
</body>
</html>`;