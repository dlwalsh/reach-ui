import React from "react";
import { action } from "@storybook/addon-actions";
import {
  ListboxInput,
  ListboxButton,
  ListboxOption,
  ListboxList,
  ListboxPopover,
} from "@reach/listbox";
import styled from "styled-components";
import "@reach/listbox/styles.css";

let name = "With Styled Components";

function Example() {
  return (
    <StyledWrapper>
      <Label id="dev-label">Choose a React Training Developer</Label>
      <ListboxInput
        aria-labelledby="dev-label"
        onChange={action("value changed")}
      >
        <StyledButton arrow="▼">
          {({ label }) => <ButtonLabel>{label}</ButtonLabel>}
        </StyledButton>
        <ListboxPopover>
          <UserList>
            {Object.entries(users).map(([userName, user]) => {
              return (
                <UserOption key={userName} userName={userName} {...user} />
              );
            })}
          </UserList>
        </ListboxPopover>
      </ListboxInput>
    </StyledWrapper>
  );
}

function UserOption({ userName, displayName, avatar, ...props }) {
  return (
    <StyledOption value={userName} label={displayName} {...props}>
      <OptionInner>
        <AvatarWrapper>
          <Avatar src={avatar} alt={`Avatar for ${displayName}`} />
        </AvatarWrapper>
        <UserInfo>
          <UserLabel>{displayName}</UserLabel>
          <UserMinorDetail>{userName}</UserMinorDetail>
        </UserInfo>
      </OptionInner>
    </StyledOption>
  );
}

Example.story = { name };
export const Comp = Example;
export default { title: "Listbox" };

let users = {
  bradwestfall: {
    displayName: "Brad Westfall",
    avatar: "https://avatars3.githubusercontent.com/u/2272118?s=56&v=4",
  },
  cassidoo: {
    displayName: "Cassidy Williams",
    avatar: "https://avatars1.githubusercontent.com/u/1454517?s=56&v=4",
  },
  chancestrickland: {
    displayName: "Chance Strickland",
    avatar: "https://avatars2.githubusercontent.com/u/3082153?s=56&v=4",
  },
  mjackson: {
    displayName: "Michael Jackson",
    avatar: "https://avatars2.githubusercontent.com/u/92839?s=56&v=4",
  },
  ryanflorence: {
    displayName: "Ryan Florence",
    avatar: "https://avatars1.githubusercontent.com/u/100200?s=56&v=4",
  },
};

function UserList(props) {
  return <StyledList {...props} />;
}

let Label = styled.span`
  display: block;
  margin-bottom: 10px;
`;

let StyledButton = styled(ListboxButton)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #24292e;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  background-color: #eff3f6;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  white-space: nowrap;
  cursor: pointer;
  width: 140px;
  max-width: 100%;
`;

let ButtonLabel = styled.span`
  flex-grow: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

let StyledWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`;

let StyledList = styled(ListboxList)`
  font-size: 13px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

let StyledOption = styled(ListboxOption)`
  color: #6a737d;
  padding: 8px;
  display: block;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  &[aria-selected="true"],
  &[data-highlighted] {
    font-weight: inherit;
    color: #fff;
    text-decoration: none;
    background-color: #0366d6;
  }
`;

let OptionInner = styled.div`
  display: flex;
  align-items: center;
`;

let AvatarWrapper = styled.div`
  text-align: center;
  margin-right: 8px;
  width: 30px;
`;

let Avatar = styled.img`
  display: inline-block;
  overflow: hidden;
  line-height: 1;
  vertical-align: middle;
  border-radius: 3px;
  border-style: none;
  max-width: 100%;
  height: auto;
`;

let UserInfo = styled.div`
  font-size: 12px;
`;

let UserLabel = styled.span`
  display: block;
  font-weight: 500;
`;

let UserMinorDetail = styled.span`
  display: block;
  font-weight: 400;
  color: #586069;

  ${StyledOption}[aria-selected="true"] &,
  ${StyledOption}[data-highlighted] & {
    color: #fff;
  }
`;