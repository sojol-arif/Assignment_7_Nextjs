import FriendDetailsClient from "@/components/FriendDetailsClient";

const FriendDetailsPage = async ({ params }) => {
  const { friendId } = await params;

  const res = await fetch('https://assignment7nextjsbatch13.vercel.app/friends.json');
  const data = await res.json();
  const friend = data.find(f => f.id == friendId);

  return <FriendDetailsClient friend={friend} />
}

export default FriendDetailsPage;
