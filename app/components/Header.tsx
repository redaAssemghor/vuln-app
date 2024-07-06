const Header = () => {
  return (
    <div className="blur-bg flex justify-between items-center p-4 sticky top-0">
      <h1 className="text-xl font-bold">CAT GEAR</h1>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Button 1
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Button 2
        </button>
      </div>
    </div>
  );
};

export default Header;
