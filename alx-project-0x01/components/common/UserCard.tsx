import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <article
      aria-labelledby={`user-${id}-name`}
      className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <header className="mb-4">
        <h2 id={`user-${id}-name`} className="text-2xl font-semibold text-gray-800">
          {name}
        </h2>
        <p className="text-gray-600">User ID: {id} · <span className="italic">{username}</span></p>
      </header>

      <dl className="text-sm text-gray-700">
        <div className="mb-2">
          <dt className="font-medium text-gray-600">Email</dt>
          <dd>
            <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
              {email}
            </a>
          </dd>
        </div>

        <div className="mb-2">
          <dt className="font-medium text-gray-600">Phone</dt>
          <dd>
            <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
              {phone}
            </a>
          </dd>
        </div>

        <div className="mb-2">
          <dt className="font-medium text-gray-600">Website</dt>
          <dd>
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {website}
            </a>
          </dd>
        </div>

        {address && (
          <div className="mb-2">
            <dt className="font-medium text-gray-600">Address</dt>
            <dd className="text-gray-600">
              {address.suite && <span>{address.suite}, </span>}
              {address.street}, {address.city} {address.zipcode}
            </dd>
          </div>
        )}

        {company && (
          <div>
            <dt className="font-medium text-gray-600">Company</dt>
            <dd className="text-gray-600">
              <span className="font-semibold">{company.name}</span>
              {company.catchPhrase && <div className="text-xs italic text-gray-500">{company.catchPhrase}</div>}
            </dd>
          </div>
        )}
      </dl>
    </article>
  );
};

export default UserCard;