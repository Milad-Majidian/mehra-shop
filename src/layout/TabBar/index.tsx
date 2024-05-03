import "./tabBarStyle.css";

function TabBar() {
  return (
    <>
      <div className="tab-bar">
        <div>
          <img src="/images/tabBar/home.svg" alt="more-option" />
          <span className="tab-bar__name">خانه</span>
        </div>
        <div>
          <img src="/images/tabBar/category.svg" alt="more-option" />
          <span className="tab-bar__name">دسته بندی ها</span>
        </div>
        <div>
          <img src="/images/tabBar/shopping-cart.svg" alt="more-option" />
          <span className="tab-bar__name">سبد خرید</span>
        </div>
        <div>
          <img src="/images/tabBar/account.svg" alt="more-option" />
          <span className="tab-bar__name">پروفایل</span>
        </div>
      </div>
    </>
  );
}

export default TabBar;
