import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

const Discover = () => {
    console.log(genres)

    return (
        <div className="flex slex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <select />
            </div>
            <Error />
            <Loader />
            <SongCard />
        </div>
    );
};

export default Discover;