export default function NameAndImage(props: any) {
  return (
    <div className="md:flex">
      <div className="flex-1 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {/* Replace with your content */}
        <div className="px-4 py-6 sm:px-0">
          <p className="text-4xl">Shintaro Yamamoto</p>
          <p>Engineer/Developer</p>
        </div>
      </div>
      <div className="flex-1 mx-auto">
        <img className="rounded-full" src={props.user.imageUrl} alt="" />
      </div>
    </div>
  );
}
