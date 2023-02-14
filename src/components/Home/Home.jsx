import React from "react";
import img from "../../data/images/live-icon.png";
import heroImg from "../../data/images/hero-image.png";
import people1 from "../../data/images/people-1.png";
import people2 from "../../data/images/people-2.png";
import people3 from "../../data/images/people-3.png";
import muteIcon from "../../data/images/Volume-off.png";
import shieldIcon from "../../data/images/Shield.png";
import imoji from "../../data/images/emojii.png";
import paperPlanTopIcon from "../../data/images/paper-plan-top.png";
import people from "../../data/images/people.png";
import cart from "../../data/images/cart.png";
import bag from "../../data/images/bag.png";
import help from "../../data/images/help.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faRocket,
  faShareNodes,
  faAngleLeft,
  faAngleDown,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section className="p-8">
      <div className="border-[2px] border-[#4A5767] pl-8 py-8 rounded-xl h-[1162px] relative">
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-8">
            <div className="flex justify-between mb-2.5">
              <div className="flex gap-[27px] items-center">
                <p className="text-[1.25rem] text-[#4A5767] font-extrabold italic">
                  Mrs.Paint LIVE / DIY Beginners Class
                </p>
                <div className="bg-[#F43131] h-[24px] w-[121px] rounded-[5px]">
                  <img src={img} alt="live icon" />
                </div>
              </div>
              <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon
                  className="border-[1px] border-[#4A5767] h-[22px] w-[22px] rounded-[6px] text-[#4A5767] hover:bg-slate-300"
                  icon={faPlus}
                />
                <p className="text-[#4A5767] font-extrabold text-[12px]">
                  Add a Co-Host
                </p>
              </div>
            </div>
            <hr className="border-[1px] text-[#4A5767] mb-[17px]" />
            <div>
              <img
                className="h-[763px] w-[1114px]"
                src={heroImg}
                alt="hero-images"
              />
            </div>
            <div className="flex justify-between mt-[31px]">
              <div>
                <h3 className="text-[#4A5767] text-base font-extrabold mb-[3px]">
                  Beginners class to my world of art
                </h3>
                <p className="text-[10px] text-[#4A5767]">
                  I share my experiences how to start painting, give you some
                  tips and ...
                </p>
                <p className="text-[#4B9CFF] text-[7px]">READ MORE</p>
              </div>
              <div className="flex">
                <span className="flex flex-col justify-center items-center gap-y-2">
                  <FontAwesomeIcon
                    className="h-[20px] w-[17px] text-[#2B3F6C]"
                    icon={faShareNodes}
                  />
                  <p className="text-[#8A939D] text-[10.74px] tracking-widest">
                    Share
                  </p>
                </span>
                <div className="border-[1px] border[#6D6C6C] ml-8 mr-8"></div>
                <span className="flex flex-col justify-center items-center gap-y-2">
                  <span className="bg-[#2B3F6C] text-white rounded-full h-[26.5px] w-[26.5px] flex justify-center items-center">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <p className="text-[#8A939D] text-[10.74px] tracking-widest">
                    Add item
                  </p>
                </span>
                <div className="border-[1px] border[#6D6C6C] ml-8 mr-8"></div>
                <span className="flex flex-col justify-center items-center gap-y-2">
                  <FontAwesomeIcon
                    className="h-[28.92px] w-[28.92px] text-[#2B3F6C]"
                    icon={faRocket}
                  />
                  <p className="text-[#8A939D] text-[10.74px] tracking-widest">
                    Giveaway
                  </p>
                </span>
              </div>
              <div className="flex items-center">
                <button
                  className="uppercase border-[1px] border[#4A5767] rounded-md py-2 px-11 text-[11px] font-extrabold text-[#4A5767] hover:bg-slate-300"
                  type="btn"
                >
                  end show
                </button>
              </div>
            </div>
          </div>
          <div className="w-[332px]">
            <div className="bg-gray-100 rounded-tl-lg rounded-bl-lg">
              <div class="flex items-center py-4">
                <div class="flex-grow border-[1px] bg-[#A9B0B9]"></div>
                <span class="flex-shrink text-[15px] text-[#4A5767] px-4 font-extrabold">
                  Chat
                </span>
                <div class="flex-grow border-[1px] bg-[#A9B0B9]"></div>
              </div>
              <div className="flex flex-col gap-y-8 p-8">
                <div className="flex gap-[18.31px]">
                  <span className="relative bottom-5">
                    <img
                      className="h-[40px] w-[40px]"
                      src={people1}
                      alt="people"
                    />
                  </span>
                  <span className="py-5 px-3 w-[200px] bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg hover:drop-shadow-2xl">
                    <p className="text-[#4A5767] text-[12px]">
                      How many degrees again?
                    </p>
                  </span>
                </div>
                <div className="flex gap-[18.31px]">
                  <span>
                    <img
                      className="h-[40px] w-[40px]"
                      src={people2}
                      alt="people"
                    />
                  </span>
                  <div className="flex flex-col space-y-[6px]">
                    <p className="text-[#4A5767] text-[12px]">Alex</p>
                    <span className="py-5 px-3 w-[200px] bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg hover:drop-shadow-2xl">
                      <p className="text-[#4A5767] text-[12px]">
                        I really like the way you’re presenting!! It makes just
                        so much fun – love it!
                      </p>
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="flex flex-col space-y-[2px]">
                    <p className="text-[#4A5767] text-[12px] text-right">You</p>
                    <span className="flex justify-between items-center py-5 p-4 w-[178px] bg-[#4A5767] rounded-tl-lg rounded-br-lg rounded-bl-lg hover:drop-shadow-2xl">
                      <p className="text-white text-[12px]">
                        I did it this time :)
                      </p>
                      <p className="text-[#BFBFBF] text-[7.78px]">12:04 pm</p>
                    </span>
                  </div>
                </div>
                <div className="flex gap-[18.31px]">
                  <span>
                    <img
                      className="h-[40px] w-[40px]"
                      src={people3}
                      alt="people"
                    />
                  </span>
                  <div className="flex flex-col space-y-[6px]">
                    <p className="text-[#4A5767] text-[12px]">Alex</p>
                    <span className="py-5 px-3 w-[200px] bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg hover:drop-shadow-2xl">
                      <p className="text-[#4A5767] text-[12px]">
                        How many degrees again?
                      </p>
                    </span>
                  </div>
                </div>
                <div className="flex gap-[18.31px]">
                  <span>
                    <img
                      className="h-[40px] w-[40px]"
                      src={people2}
                      alt="people"
                    />
                  </span>
                  <div className="flex flex-col space-y-[6px]">
                    <p className="text-[#4A5767] text-[12px]">Alex</p>
                    <span className="flex">
                      <span className="py-5 px-3 w-[180px] bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg hover:drop-shadow-2xl">
                        <p className="text-[#4A5767] text-[12px]">
                          I love the painting brushes!
                        </p>
                      </span>
                      <span className="bg-[#D1D1D1] px-2 rounded-tr-lg rounded-br-lg flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-shield-fill-exclamation fill-[#4A5767]"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.55 8.502L7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0zM8.002 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="flex flex-col space-y-[2px]">
                    <p className="text-[#4A5767] text-[12px] text-right">You</p>
                    <span className="py-5 pl-4 w-[200px] bg-[#4A5767] rounded-tl-lg rounded-br-lg rounded-bl-lg hover:drop-shadow-2xl">
                      <p className="text-white text-[12px] leading-10">
                        Namste & Thank’s to everyone.&#128077; <br />
                        See you next time!!
                      </p>
                    </span>
                  </div>
                </div>
                <div className="flex gap-[18.31px]">
                  <span>
                    <img
                      className="h-[40px] w-[40px]"
                      src={people2}
                      alt="people"
                    />
                  </span>
                  <div className="flex flex-col space-y-[6px]">
                    <p className="text-[#4A5767] text-[12px]">Alex</p>
                    <div className="flex justify-between">
                      <div className="flex">
                        <span className="py-5 px-3 w-[145px] bg-[#D1D1D1] rounded-tr-lg rounded-br-lg rounded-bl-lg hover:drop-shadow-2xl">
                          <div className="flex justify-around">
                            <span className="flex flex-col items-center space-y-2">
                              <img src={muteIcon} alt="muted" />
                              <p className="text-[#4A5767] text-[10.46px] font-extrabold">
                                Muted
                              </p>
                            </span>
                            <div className="border-r border-[1px] border-white"></div>
                            <span className="flex flex-col items-center space-y-2">
                              <img src={shieldIcon} alt="muted" />
                              <p className="text-[#4A5767] text-[10.46px] font-extrabold">
                                Kick Out
                              </p>
                            </span>
                          </div>
                        </span>
                        <span className="bg-white px-4 h-[50px] flex items-center rounded-tr-lg round-br-lg">
                          <FontAwesomeIcon
                            className="h-[17] w-2 text-[#4A5767]"
                            icon={faAngleLeft}
                          />
                        </span>
                      </div>
                      <span className="bg-[#2B3F6C] p-2 rounded-lg flex self-end items-center">
                        <FontAwesomeIcon
                          className="text-white"
                          icon={faAngleDown}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-5 p-4 w-[270px] bg-white rounded-lg drop-shadow-2xl hover:drop-shadow-lg">
                  <div className="flex justify-between">
                    <div className="flex gap-x-[11px] items-center">
                      <img className="h-[20px] w-[20px]" src={imoji} alt="" />
                      <input
                        className="py-1 pl-2 w-40 border-l-2 border-l-[#4A5767] text-[#4A5767] focus:outline-none"
                        type="text"
                        placeholder="Write message here"
                      />
                      {/* <span className="border-r border-[1px] border-[#4A5767]  h-6"></span> */}
                      {/* <p className="text-[14px] text-[#4A5767]">
                        Write message here
                      </p> */}
                    </div>
                    <div>
                      <button
                        type="btn"
                        className="border-[1px] border-[#4A5767] w-[46px] h-[46px] rounded-lg flex justify-center items-center hover:bg-slate-300"
                      >
                        <img src={paperPlanTopIcon} alt="send-button" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-r border-r-[#4A5767] border-r-2 absolute top-0 bottom-0 right-16"></div>
        <div className="">
          <div className="absolute top-8 right-3">
            <img src={people} alt="people" />
          </div>
          <div className="absolute top-96 right-3 space-y-16 flex flex-col justify-center items-center">
            <span className="flex flex-col items-center space-y-2">
              <img src={cart} alt="shopping-cart" />
              <p className="text-[#8A939D] text-[10px]">Shop</p>
            </span>
            <span className="flex flex-col items-center space-y-2">
              <img src={bag} alt="bag-icon" />
              <p className="text-[#8A939D] text-[10px]">Order</p>
            </span>
            <span className="flex flex-col items-center space-y-2">
              <FontAwesomeIcon icon={faComment} />
              <p className="text-[#8A939D] text-[10px]">Chat</p>
            </span>
            <span className="flex flex-col items-center space-y-2">
              <img src={help} alt="help-icon" />
              <p className="text-[#8A939D] text-[10px]">Help</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
