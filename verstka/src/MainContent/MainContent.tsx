import { useState } from "react";
import styles from "../App.module.css";
import cn from "classnames";
import { Banner } from "../Banner/Banner";
export const MainContent = () => {
  const [shiftSecond, setSecondshrift] = useState(false);

  return (
    <div
      className={cn(
        "mx-auto flex flex-col justify-center items-center relative tablet300:h-100vh tabletSmall:overflow-x-hidden font-Helvetica",
        { 
          ["font-mono"]: shiftSecond == true
        }
      )}
    >
      <Banner />
      <div
        className="mr-72
        tablet:ml-24
        tablet450:ml-44 
        tablet410:ml-62
      "
      >
        <p className={styles.textShadowOver} data-text="yo">
          yo
        </p>
      </div>

      <div
        className="flex gap-24 items-center relative -top-10 bg-transparent
        tablet:gap-5
        tablet450:gap-0 
        tablet410:mr-36
      "
      >
        <p
          className="font-bold ml-[4%] w-64 
        tablet:w-44
        tablet450:-ml-7 
        tablet410:ml-28 top-full
        tabletSmall:hidden
        "
        >
          with special guests <br /> the schramms and kustomized
        </p>

        <p className={styles.textShadowOver} data-text="la">
          la
        </p>
      </div>

      <div
        className="mr-32 relative -top-32 bg-transparent
        tablet: ml-16
        tablet450:mr-24 
        tablet410:mr-12 tablet410:ml-0 table410:w-5 
        tabletSmall:ml-28
        "
      >
        <p className={styles.textShadowOver} data-text="ten">
          ten-
        </p>
      </div>

      <div
        className="flex gap-32 items-center ml-36 relative -top-52 bg-transparent
        tablet:ml-10 tablet:gap-5 
        tablet450:-ml-2 tablet450:gap-3
        tablet410:mr-28
        tabletSmall:ml-10
        "
      >
        <div
          className="mt-20 items-center font-bold 
          tablet:w-32 
          tablet450:w-24
          tablet410:ml-20
          tabletSmall:hidden 
          "
        >
          <p>saturday / november 27 1993</p>
          <p className="mt-3">
            at cbgb and omfug <br /> 315 bowery at bleecker st / nyc
          </p>
        </div>

        <p className={styles.textShadowOver} data-text="go">
          go
        </p>
      </div>
      <button onClick={() => setSecondshrift(!shiftSecond)}
      className="mb-5 border-4 p-5 bg-orange rounded-xl"  >Сменить шрифт</button>
    </div>
  );
};
