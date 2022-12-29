import React from 'react';
import img from '../Header/task.png'
const CompeletedTask = () => {
    return (
        <div>
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                <span class="sr-only">Image</span>
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Task Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Details
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Done
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4 w-32">
                                <img src={img} alt="Iphone 12" />
                            </td>
                            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                Iphone 12
                            </td>
                            <td class="py-4 px-6">

                            </td>
                            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                <button class="font-medium btn outline btn-sm py-2 px-2 text-green-600 hover:underline">Pending</button>
                            </td>
                            <td class="py-4 px-6">
                                <button class="font-medium btn outline btn-sm py-2 px-2 text-green-600 hover:underline">Compeleted</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompeletedTask;