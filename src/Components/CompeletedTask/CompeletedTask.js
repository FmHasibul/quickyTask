import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthContext/AuthProvider';
const CompeletedTask = () => {
    const { user } = useContext(AuthContext)
    // console.log(user?.email)
    // const url = `http://localhost:5000/allTask?email=${user?.email}`

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ["userPuduct"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allTask?email=${user?.email}`,
            );
            const data = await res.json();
            // console.log(data);
            return data;
        },
    });
    if (isLoading) {
        <p>Loading...</p>
    }
    // const handleStatusUpdate = (_id) => {
    //     fetch(`http://localhost:5000/allTask/${_id}`, {
    //         method: "PUT",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify({ taskComplete: true }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 refetch();
    //                 toast.success("Task Completed");
    //                 navigate('/compeletedTask')
    //             }
    //         });
    // };
    let handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/allTask/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Deleted successfully`);
                }
            });
    };
    const items = data.filter(item => item.taskComplete === true)
    return (
        <div>

            {
                data.length > 0
                    ? <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Task Name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Details
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Status
                                    </th>

                                    <th scope="col" className="py-3 text-red-600 px-6">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    items.map(task => (
                                        <tr key={task._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="p-4 w-32">
                                                <img src={task?.image} alt="Iphone 12" />
                                            </td>
                                            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                {task?.name}
                                            </td>
                                            <td className="py-4 px-6">
                                                {task?.description}
                                            </td>
                                            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                <button className="font-medium btn outline btn-sm py-2 px-2 text-green-600 hover:underline">{task?.taskComplete ? "Compeleted" : "Pending"}</button>
                                            </td>

                                            <td className="py-4 px-6">
                                                <button onClick={() => handleDelete(task._id)} className="font-medium btn outline btn-sm  px-2 text-red-600 ">X</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    : <p className='flex items-center justify-center font-extrabold '>You didn't COMPLETED any task yet</p>
            }

        </div>
    );
};

export default CompeletedTask;