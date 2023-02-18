import React from 'react';

interface OverleafDeployButtonProps {
    texFilePath: string;
    buttonText: string;
    buttonStyle: any;
}

export const OverleafDeployButton: React.FC<OverleafDeployButtonProps> = (props) => {
 const { 
 texFilePath,
 buttonText="Deploy to Overleaf",
 buttonStyle={
    display: "inline-block",
    backgroundColor: "green",
    color: "white",
    padding: "8px 16px",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "16px",
    textAlign: "center"
    }
 } = props;

 const fileUrl = `https://www.overleaf.com/docs?snip_uri=${texFilePath}`;

 return (
    <a href={fileUrl} target="\_blank" style={buttonStyle}>
    {buttonText}
    </a>
 );
}