import logo from './logo.svg';
import './App.css';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import DataBindingClassComponent from './DataBinding/DataBindingClassComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './DemoState/DemoState';
import BaiTapChonXe from './DemoState/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapRenderDanhSachPhim from './RenderWithMap/BaiTapRenderDanhSachPhim';
import DemoProps from './Props/DemoProps';
// import ProductList from './Components/BaiTapLayout/ProductList';
import ProductListRCC from './Props/ProductListRCC';
import ProductList from './Props/PropsWithEvent/ProductList'
import PropsWithEvent from './Props/PropsWithEvent/PropsWithEvent'
import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <DataBindingClassComponent /> */}
      {/* <HandleEvent /> */}
      {/* <DemoState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapRenderDanhSachPhim /> */}
      {/* <DemoProps /> */}
      {/* <ProductListRCC /> */}
      {/* <ProductList /> */}
      {/* <PropsWithEvent /> */}
      <BaiTapGioHangRedux />
    </div>
  );
}

export default App;
