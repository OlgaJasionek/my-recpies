import { Route, Routes } from "react-router-dom";
import Header from "../../common/components/header.component";
import AddRecipeForm from "../add-recipe-form/add-recipe-form.component";
import Home from "../home/home.component";

const Cockpit = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-recipe' element={<AddRecipeForm />} />
      </Routes>
    </div>
  );
};

export default Cockpit;
