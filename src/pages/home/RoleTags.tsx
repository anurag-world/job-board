import rolesData from '@/data/rolesData';

export default function RoleTags() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-roboto font-extrabold mb-1">
        Search by Popular Roles
      </h1>
      <h2 className="text-lg mb-6">
        Select a role to show relevant jobs for it!
      </h2>
      <div className="grid grid-cols-4 gap-x-4 gap-y-4 pb-12">
        {rolesData.map((role, index) => (
          <div
            className="text-center p-4 border border-solid border-gray-200 rounded-2xl shadow hover:shadow-md cursor-pointer"
            key={index}
          >
            <span className="font-open-sans font-semibold">{role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
