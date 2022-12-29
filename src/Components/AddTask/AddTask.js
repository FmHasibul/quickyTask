import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthContext/AuthProvider";

const AddTask = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const imageHostKey = `a23314678e70cf4f7a8c05f68caa3ef3`
    const navigate = useNavigate();

    const handleAddTask = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    // console.log(imgData.data.url);
                    const task = {
                        user: user?.email,
                        name: data.name,
                        image: imgData.data.url,
                        description: data.description,
                    };
                    console.log('test', task);
                    fetch('http://localhost:5000/addTask', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application.json'
                        },
                        body: JSON.stringify(task)
                    })
                        .then(res => res.json())
                        .then((result) => {
                            console.log(result);
                            toast.success(`${data.name} added`);
                            navigate("/mytask");
                        });
                }
            });
    };

    return (
        <section className='bg-white '>
            <div className='container flex items-center justify-center min-h-screen px-6 mx-auto'>
                <form
                    onSubmit={handleSubmit(handleAddTask)}
                    className='w-full max-w-md'
                >
                    <div className='flex items-center justify-center mt-6'>
                        <Link className='w-1/3 pb-4 font-medium text-center text-gray-500 capitalize '>
                            Add Your Task
                        </Link>
                    </div>

                    <div className='relative '>

                        <input
                            type='text'
                            {...register("name", {
                                required: "Task name is Required",
                            })}
                            className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-green-400 focus:outline-none focus:ring '
                            placeholder='Task Name'
                        />
                        {errors.name && (
                            <p className='text-red-500'>{errors.name.message}</p>
                        )}
                    </div>
                    <div className="mt-8">
                        <input
                            type='file'
                            {...register("image", {
                                required: "Image is Required",
                            })}
                            className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-green-400 focus:outline-none focus:ring '
                            placeholder='image'
                        />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>


                    <div className='relative flex items-center mt-8'>
                        <textarea
                            type='text'
                            {...register("description", {
                                required: "Description needed",
                            })}
                            className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-green-400 focus:outline-none focus:ring '
                            placeholder='Task description'
                        />
                        {errors.description && (
                            <p className='text-red-500'>{errors.description.message}</p>
                        )}
                    </div>

                    <div className='mt-8'>
                        <input value="Add Task" type="submit" className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transform bg-gray-800 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50' />
                    </div>
                </form>
            </div>
        </section>
    );
};


export default AddTask;