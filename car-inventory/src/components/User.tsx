import { useContext } from 'react';
import { AuthContext } from './Auth';
import Car  from './CarDisplay';

const UserPage = () => {
  const { user } = useContext(AuthContext);
  const cars: typeof Car[] = [];

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <h3>Your Car Collection</h3>
      {cars.length > 0 ? (
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              {car.name} {car.mileage} ({car.year})
            </li>
          ))}
        </ul>
      ) : (
        <p>No cars in your collection.</p>
      )}
    </div>
  );
};

export default UserPage;
