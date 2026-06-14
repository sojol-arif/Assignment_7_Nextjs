import FriendDetailsClient from "@/components/FriendDetailsClient";

const FriendDetailsPage = async ({ params }) => {
  const { friendId } = await params;

  const res = await fetch('https://assignment7nextjsbatch13.vercel.app/friends.json');
  const fiends = await res.json();
  const friend = fiends.find(f => f.id == friendId);

  return <FriendDetailsClient friend={friend} />
}

export default FriendDetailsPage;
