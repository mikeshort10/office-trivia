import React from "react";

export type RH<T> = React.Dispatch<React.SetStateAction<T>>;

export type InputChange = React.ChangeEvent<HTMLInputElement>;
