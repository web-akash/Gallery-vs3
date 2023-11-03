function App() {
  return (
    <>
      <div className="bg-blue-100 h-[100vh]  flex items-center">
        <div className="max-w-screen-xl w-full p-5 bg-white mx-auto rounded-md border  h-[97%]">
          <div className="headerTitel border-b py-2">
            <h1 className="titel text-lg">Gallery</h1>

            <div className="flex justify-between">
              <label>
                <input checked type="checkbox" />
                <span className="select-file-count ml-2 text-base">2</span>{" "}
                Files Selected
              </label>
              <p className="text-[red] text-base">Delete</p>
            </div>
          </div>
          <div className="DragAndDrop-Container mt-4 flex flex-wrap gap-5">
            <div className="feature-img  w-[400px]  flex-grow-3 rounded-md border">
              <div className="item-img">
                <img
                  className="rounded-md"
                  src="./assets/image-1.webp"
                  alt="image-1"
                />
              </div>
            </div>

            <div className="item-img  w-[200px] flex-grow-1">
              <img
                className="rounded-md  border "
                src="./assets/image-2.webp"
                alt="image-1"
              />
            </div>
            <div className="item-img  w-[200px] flex-grow-1">
              <img
                className="rounded-md  border "
                src="./assets/image-2.webp"
                alt="image-1"
              />
            </div>
            <div className="item-img  w-[200px] flex-grow-1">
              <img
                className="rounded-md  border "
                src="./assets/image-2.webp"
                alt="image-1"
              />
            </div>
            <div className="item-img  w-[200px] flex-grow-1">
              <img
                className="rounded-md  border "
                src="./assets/image-2.webp"
                alt="image-1"
              />
            </div>
            <div className="item-img w-[200px]  flex-grow-1">
              <img
                className="rounded-md  border "
                src="./assets/image-2.webp"
                alt="image-1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
