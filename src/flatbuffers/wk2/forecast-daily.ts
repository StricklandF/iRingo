// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from "../../../node_modules/flatbuffers/mjs/flatbuffers.js";

export class ForecastDaily {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ForecastDaily {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsForecastDaily(bb:flatbuffers.ByteBuffer, obj?:ForecastDaily):ForecastDaily {
  return (obj || new ForecastDaily()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsForecastDaily(bb:flatbuffers.ByteBuffer, obj?:ForecastDaily):ForecastDaily {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ForecastDaily()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startForecastDaily(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endForecastDaily(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createForecastDaily(builder:flatbuffers.Builder):flatbuffers.Offset {
  ForecastDaily.startForecastDaily(builder);
  return ForecastDaily.endForecastDaily(builder);
}
}