export const Drawer = ({ isOpen, handleOpen }) => {
  return (
    <div
      className={`fixed bg-black opacity-30 w-80 h-full z-10 top-0 shadow-md left-full ${
        isOpen ? "-translate-x-80" : "translate-x-0"
      } `}
    >
      <button onClick={handleOpen}>closesghdjkfhlg;h</button>
    </div>
  );
};
