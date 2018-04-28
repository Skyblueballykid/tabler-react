// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function MediaList({ className, children }: Props): React.Node {
  const classes = cn("media-list", className);
  return <div className={classes}>{children}</div>;
}

export default MediaList;
