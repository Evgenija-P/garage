import { navLinks } from "@/constants/navLinks";

const ServicesList = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4">
      {navLinks.map(el => (
        <p>{el.titleKey}</p>
      ))}
    </div>
  );
};

export default ServicesList;
