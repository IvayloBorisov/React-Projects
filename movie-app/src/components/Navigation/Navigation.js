import { ListItem } from "../index";
import { navLinksInfo } from "../../utils/index";

const Navigation = ({ type }) => {
  return (
    <nav className={`${type}-nav`}>
      <ul>
        {
           navLinksInfo.map((item) => {
            return <ListItem key={ item.id } title={ item.title } path={ item.path } type={ type }/>;
           })
        }
      </ul>
    </nav>
  );
};

export default Navigation;
