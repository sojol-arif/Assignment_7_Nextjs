import Image from "next/image";
import Link from "next/link";

const Friend = ({friend}) => {
    const {id, name, picture, email,  status, days_since_contact, tags, bio, goal, next_due_date} = friend;

    return (
        <Link href={`https://assignment7nextjsbatch13-n5zha7dhv-arif-s-projects3.vercel.appfriends/${friend.id}`} className="shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] rounded-[8px] flex flex-col items-center p-6 bg-white">
            <Image src={picture} alt="" width={80} height={80} className="rounded-full"></Image>
            <h3 className="font-semibold text-[16px] md:text-[20px]">{name}</h3>
            <p className="text-[12px]">{days_since_contact}d ago</p>
            <ul className="flex flex-wrap justify-center gap-1 mt-2 mb-2">
                {tags.map((tag, key)=> (
                    <li key={key} className="font-medium text-primary bg-[#CBFADB] rounded-full p-1 px-4 text-[12px] uppercase">
                        {tag}
                    </li>
                ))}
            </ul>
            <div className={` ${status == 'Almost Due'? 'bg-[#EFAD44]': status == 'on_track'? 'bg-[#EF4444]': status == 'overdue'? "bg-[#244D3F]": ""} font-medium rounded-full p-1 px-4 text-[12px] text-primary-content`}>
                {status}
            </div>
        </Link>
    );
};

export default Friend;