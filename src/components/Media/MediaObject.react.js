// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function MediaObject({ className, children }: Props): React.Node {
  const classes = cn("media-object", className);
  return <div className={classes}>{children}</div>;
}

export default MediaObject;
