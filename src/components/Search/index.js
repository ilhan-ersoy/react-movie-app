import React from "react";
import { StartIcon } from "../../Icon";


const MovieCard = ({ img, title, id }) => {
    return (
        <div className={"flex justify-center my-10"} style={{ maxWidth: "500px" }}>
            <img src={img} className={"min-w-[220px] min-h-[290px] rounded shadow"} alt="" />
            <div className={"flex pl-4 flex-col justify-start h-full"}>
                <div className={""}>
                    <h1 className={"text-xl"}>{title}</h1>
                    <div className={"flex gap-x-1 items-center"}>
                        <span>
                            <StartIcon size={13} />
                        </span>
                        <div className={"flex justify-center items-baseline"}>
                            <span className={"text-2xl font-semibold text-[#5883FF]"}>
                                6.8
                            </span>
                            <span className={"opacity-40"}>
                                /10
                            </span>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col gap-y-1 my-3"}>
                    <div>
                        Dil:İngilizce
                    </div>
                    <div>
                        Oyuncular: Jeff Bridges, Garrett Hedlund, Olivia
                    </div>
                    <div>
                        Wilde | <span className={"underline"}>Tüm listeyi gör »</span>
                    </div>
                </div>
                <div className={"flex flex-col gap-y-1 my-3"}>
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad…
                        <span className={"underline cursor-pointer"}>
                            Detaylar »
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;