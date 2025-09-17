import { useState } from 'react';
import { blogCategories } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import { Upload } from 'lucide-react';

const AddBlog = () => {
    const { axios } = useAppContext();
    const [isAdding, setIsAdding] = useState(false);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [category, setCategory] = useState('General');
    const [description, setDescription] = useState('');
    const [isPublished, setIsPublished] = useState(false);
    
    // MODIFICATION 1: Replaced single 'author' state with two new states
    const [authorName, setAuthorName] = useState('');
    const [linkedinUrl, setLinkedinUrl] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!image) {
            toast.error('Please upload a thumbnail image.');
            return;
        }
        setIsAdding(true);
        try {
            // MODIFICATION 2: Updated the metadata object with new fields
            const blogMetaData = {
                title,
                subTitle,
                description,
                category,
                authorName,
                linkedinUrl,
                isPublished,
            };

            const formData = new FormData();
            formData.append('blog', JSON.stringify(blogMetaData));
            formData.append('image', image);
            const { data } = await axios.post('/api/blog/add', formData);

            if (data.success) {
                toast.success(data.message);
                setImage(null);
                setTitle('');
                setDescription('');
                setSubTitle('');
                setCategory('General');
                setIsPublished(false);

                // MODIFICATION 3: Reset the new author fields
                setAuthorName('');
                setLinkedinUrl('');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            toast.error(errorMessage);
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='flex-1 text-gray-100 h-full overflow-y-auto p-4'>
            <div className='bg-blue-400/10 w-full max-w-3xl p-4 md:p-8 mx-auto shadow rounded-3xl text-white'>
                
                <p className='text-white text-xl font-bold mb-2'>Upload Thumbnail</p>
                <label htmlFor="image" className='cursor-pointer'>
                    {!image ? (
                        <div className='w-32 h-32 bg-gray-700/50 rounded-lg flex items-center justify-center'>
                           <Upload className='h-16 w-16 text-gray-400'/>
                        </div>
                    ) : (
                        <img src={URL.createObjectURL(image)} alt="Preview" className="w-48 h-auto object-cover rounded-lg" />
                    )}
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' accept="image/*" hidden />

                <p className='mt-4 text-white font-medium'>Blog Title</p>
                <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-1 p-2 bg-gray-700/50 border border-gray-600 outline-none rounded focus:border-primary' onChange={e => setTitle(e.target.value)} value={title}/>

                <p className='mt-4 text-white font-medium'>Sub Title</p>
                <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-1 p-2 bg-gray-700/50 border border-gray-600 outline-none rounded focus:border-primary' onChange={e => setSubTitle(e.target.value)} value={subTitle}/>
                
                {/* MODIFICATION 4: Replaced single author input with two inputs */}
                <p className='mt-4 text-white font-medium'>Author Name</p>
                <input type="text" placeholder="Enter author's name" required className='w-full max-w-lg mt-1 p-2 bg-gray-700/50 border border-gray-600 outline-none rounded focus:border-primary' onChange={e => setAuthorName(e.target.value)} value={authorName}/>
                
                <p className='mt-4 text-white font-medium'>Author LinkedIn URL</p>
                <input type="url" placeholder="https://linkedin.com/in/username" className='w-full max-w-lg mt-1 p-2 bg-gray-700/50 border border-gray-600 outline-none rounded focus:border-primary' onChange={e => setLinkedinUrl(e.target.value)} value={linkedinUrl} required/>

                <p className='mt-4 text-white font-medium'>Blog Description</p>
                <textarea 
                    placeholder='Paste your Markdown Content' 
                    className='w-full mt-1 p-2 bg-gray-700/50 border border-gray-600 outline-none rounded focus:border-primary'
                    rows="15"
                    name="description" 
                    value={description} 
                    onChange={(e) => {setDescription(e.target.value)}}
                    required
                ></textarea>

                <p className='mt-4 font-medium'>Blog category</p>
                <select onChange={e => setCategory(e.target.value)} value={category} name="category" className='mt-1 px-3 py-2 bg-gray-700/50 border border-gray-600 outline-none rounded focus:border-primary' required>
                    {blogCategories.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>

                <div className='flex items-center gap-3 mt-6'>
                    <input type="checkbox" id="publish" checked={isPublished} className='w-4 h-4 cursor-pointer' onChange={e => setIsPublished(e.target.checked)}/>
                    <label htmlFor="publish" className='font-medium cursor-pointer'>Publish Now</label>
                </div>

                <button disabled={isAdding} type="submit" className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm font-semibold disabled:bg-primary/50'>
                    {isAdding ? 'Adding...' : 'Add Blog'}
                </button>
            </div>
        </form>
    );
};

export default AddBlog;