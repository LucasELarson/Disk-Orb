import ChannelBar, { Foo } from "./COMPONENTS/ChannelBar";
import MainBody from "./COMPONENTS/MainBody";
import People from "./COMPONENTS/People";
import SideBar from "./COMPONENTS/Sidebar";
import TopHeader from "./COMPONENTS/TopHeader";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <TopHeader/>
      <div className="flex h-full">
      <SideBar/>
      <ChannelBar/>
      <MainBody/>
      <People/>
      </div>
    </div>
  )
}