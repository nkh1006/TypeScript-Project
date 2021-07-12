import React from "react";

interface IState {
    people: {
      name: string;
      age: number;
      url: string;
      note?: string;
    }[]
}

const List = () => {
    return (
        <div>
            I am a List
        </div>
    )
};

export default List;

