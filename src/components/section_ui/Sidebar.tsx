import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-full lg:w-72 min-h-[300px] lg:min-h-full bg-white rounded-md border border-gray-200 overflow-auto">
      {/* Profile Section */}
      <div className="w-full flex justify-center py-5">
        <div className="flex items-center gap-4 w-[240px] border-b pb-5">
          {/* Profile Image */}
          <Image
            src="/profile.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover border border-gray-300"
            width={64}
            height={64}
          />
          {/* Name + Role */}
          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Cris Justine K. Oracion
            </h2>
            <p className="text-xs text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      {/* ...rest of sidebar */}
    </div>
  );
}
