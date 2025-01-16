import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-end"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515543582370-4cff31e54e8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      {/* Logo */}
      <div className="absolute top-4 left-4">
        <img
          className="w-16"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAhFBMVEX///8BAgIAAAAqKiolJibW1tbb3NyTlJTs7Ozn5+eampoUFBSMjIyzs7P09PTf39+hoaF8fHxYWFh0dHS6urqpqalvb2/w8PDLy8u4uLjAwMA+Pj5dXV05OTlDQ0Oenp4fHx8QEBBNTU1oaGgyMjKAgIBJSUljY2OGhoYhISFRUlLQ0NDrFLptAAAG70lEQVR4nO2caXuyvBaFIa2oqDhi7WS1dlD7///fEcRkZw4tePm8Z92fasy4SLI3ybZRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/i/ocbJauXu/q+BfoMM4w4DsInesJ3Vb7Oc16bC4ImhI7JKd3V2S7nlS2mI/rwk00YEmOtBEB5roQBMdaKIDTXSgiQ400YEmOtBEB5roQBMdaKIDTXSgiU5rmmSrfDjf7Zaf6WNSs0+91Sgd7vfd/Glcs2QztKNJMrxnlOOkZ6zOwGIplfxK++Z8/f2w4vOSMvm+K8t0Qtuy0IYmo6JrMaHo6PtTQPVJKYhS8mNkzCp0Kz+vnvnn29NkEcuC8NHd+1QZH5mp6CnRoEoiOl58/BYlb06T3rNRkfPY1pZ1cGbqKHmn7UmSJr2YFL01TXLruM5jmzg64i6pGjWqyYO83m5Jk7do6RxYMbQXS8UTb8mZXIBqspF3r1vSJJ25x1Vm+jDW++mRpCj5KpUgmizlsjeliW5sGNN2TbYxVPupjMpYVBZFaBKrLdyQJtI+Vzgl027anR7VsYmSnK5ifgfLNB/l3eVWMcx0+SSGiXV7tpj2bZsKF3TcdQyt4EkWk3hpfbko7aKmSaHly3I+n+/+6v22oAljG9UTWQykock2hFoN3TKl0rfCJCfqctvmDzXHbqN5TdjJ/uh0paFJT3JNvnnVx9W7I98feLKsiW6r/0DjmigD5iRUFGp8RiT921iUmDOWi/qkRn/ChhtE05qwjS0yR1oixFknTrlZEipK9XITyZo0K0nTmjBmD1bqMcPQojeR+GotKpYPnyiSJqbV+nua1YQx1xvNj2miiBqZfY/si1yDKon6J/cBPa9Bw5rkrsLRXjR2Kf6ozwATwoO5eB9Uk0VAz2vQqCaO2a8Ujy9W9Z1XuA1suDpCSkwLsRma1cS31QkbU0UUZqJC9xTriiV2TiCa7AI6XodGfXvfNKHlN+XnR3WoNvqilfOWlYQtut/QqCbGQ0IJsi+UO+qU12c7RLjATU+1exBNVgEdr0Oj78X+oOGxaK70/8VI017fxYNQ77zqEm1raowmNVnXquBN+ijOB2zwjOftI1EXU3M0qck+oIIXnnsaFW5cXBv2XFb0j2gSstcNee6Z1HoNTc5G+x/RJOQGZ8Jzf50+rX6jydlCXUeTsN8gODQJ2f9znrsw3LepCal6GpBdd85/rUmxLdymJsQX8nkIEd0TTZo8BrSX8tzvkfRWeEOaZKJq9wtHyY9Tk5A3duFmFCZVPBG/LVbuh1vUhHoIfpdr4tRkGdDcq+R6kSdS97C9TU2eFc/SycypSewqWqG8CIS+Auq0qcm0zibLXJrElpNYypMyMYQLp15w+GhTE/L67j2HoMfJJk381pxPtKqxN/G55i8s29SEbnO+99p7jyZeUTUrR9wje8iBkTY1iQ7Blke6rzOeKfksz7d2rsCUiRNMq5qkwWNiXk08C+BHn1JDkVTvp7itatKjY3KF4s2pg2U5oz46mxK37Hw/J16ge2wLZQNvVROx98f07lEjp5JY73dcD5ve5/FxkOU0cJQdM8Vat6uJdHv0Zcu1sEVMKPeAdj9jSiQR7t2YpNoPpXqF/ypdE7arCX1+lxMbDTW2yn5fbLvMXlr2nXmAKOOydRaTU8aWNelLm6fpQiJ7kQfu0MRy65utaRt0L89I62xgHN+oykIjMVrWRI0T2qmNGALwnPEn+r2cFA+p3HnIITn6hvQwIwb7/TLD2tZEvJlVLc8WYnJ39qZIXlecEmMfsiq5HJKjXgzPpS/ZRDLoYylsVux3rWuSqbsFY5vdPk270y89Ss+rSVl+OUqKsWWd/FsJ3dIX51r+ns3yTiFbNn4q4/bJdxtepnVNpIgZ3jU99tDzDsgMxfUqDDfeiu2yl81Ij9vW5ORiBhx5saM4/jCcFex0YfUqzKdxd4acesqWrKoraOKJ7T43/h59uDR58gvLbIe2R/8jscXHtqdJ1Du4u8UKf9ypySjqD5x1MHaw9n/oDS6Xj3euoonrhxFln4pjOI8mhQ2x18GcN4WdjbOoOsGupEmUvFq6VdiRci17NYl+7qx1fHnO4SZmE1c2rx1XXUuTKFqtDf1iwo374PaAx5AdeFJ1JLI46HWcUt4DYhMnBstfJO31MwjyO6+WNTn5SMOY2MDyz0PKnazX7eDMloe4flySxDHdaqlWEQ8DO76aCxtc/fVitFQJG1zabV2TE/3RdH15BuvPUfDPGymr7sugquJ5nteKgB+PPo+bsy7r+aTRyNe/kv39H/NlD/+Z/+0HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuj/8B98NQO6pxV8kAAAAASUVORK5CYII="
          alt="Uber Logo"
        />
      </div>

      {/* Bottom Section */}
      <div className="bg-white pb-7 px-4 py-4 rounded-t-lg shadow-lg w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Uber</h2>
        <Link to='/login' className=" flex items-center justify-center w-full bg-black text-white py-4 rounded hover:bg-gray-800">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
