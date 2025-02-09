
import pic from '../public/Image/qualifications-760.webp'
const Education = () => {
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center mb-7">My Educational Qualification</h2>
            <div className="lg:w-8/12 lg:mx-auto border-2 border-gray-200 rounded-3xl p-3 sm:grid sm:grid-cols-2 my-8 bg-white">
                <div className="p-4">
                    <h4 className="text-2xl font-bold ">Qualification :-</h4>
                    <p className="text-xl font-bold text-gray-500 mb-3">
                        **  Bachelor of Arts in Philosophy (Ongoing)
                        Haji Mohammad Mohsin College, Expected Graduation: 2026
                    </p>
                    <p className="text-xl font-bold text-gray-500 mb-3">
                        **  Higher Secondary Certificate
                        Completed: 2020</p>
                    <p className="text-xl font-bold text-gray-500 mb-3">
                        **  Future Education Plan:
                        Planning to pursue a Master’s degree in Philosophy after completing my Bachelor.
                    </p>
                </div>
                <div>
                    <img className="w-full h-72 object-cover rounded-3xl" src={pic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Education;