// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from "../../../node_modules/flatbuffers/mjs/flatbuffers.js";

import { ComparisonType } from '../wk2/comparison-type.js';
import { Metadata } from '../wk2/metadata.js';
import { Pollutant } from '../wk2/pollutant.js';
import { PollutantType } from '../wk2/pollutant-type.js';


export class AirQuality {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):AirQuality {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsAirQuality(bb:flatbuffers.ByteBuffer, obj?:AirQuality):AirQuality {
  return (obj || new AirQuality()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsAirQuality(bb:flatbuffers.ByteBuffer, obj?:AirQuality):AirQuality {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new AirQuality()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

metadata(obj?:Metadata):Metadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Metadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

categoryIndex():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

index():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

isSignificant():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

pollutants(index: number, obj?:Pollutant):Pollutant|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new Pollutant()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

pollutantsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

previousDayComparison():ComparisonType {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : ComparisonType.UNKNOWN;
}

primaryPollutant():PollutantType {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : PollutantType.NOT_AVAILABLE;
}

scale():string|null
scale(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
scale(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startAirQuality(builder:flatbuffers.Builder) {
  builder.startObject(8);
}

static addMetadata(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, metadataOffset, 0);
}

static addCategoryIndex(builder:flatbuffers.Builder, categoryIndex:number) {
  builder.addFieldInt8(1, categoryIndex, 0);
}

static addIndex(builder:flatbuffers.Builder, index:number) {
  builder.addFieldInt8(2, index, 0);
}

static addIsSignificant(builder:flatbuffers.Builder, isSignificant:boolean) {
  builder.addFieldInt8(3, +isSignificant, +false);
}

static addPollutants(builder:flatbuffers.Builder, pollutantsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, pollutantsOffset, 0);
}

static createPollutantsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startPollutantsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addPreviousDayComparison(builder:flatbuffers.Builder, previousDayComparison:ComparisonType) {
  builder.addFieldInt8(5, previousDayComparison, ComparisonType.UNKNOWN);
}

static addPrimaryPollutant(builder:flatbuffers.Builder, primaryPollutant:PollutantType) {
  builder.addFieldInt8(6, primaryPollutant, PollutantType.NOT_AVAILABLE);
}

static addScale(builder:flatbuffers.Builder, scaleOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, scaleOffset, 0);
}

static endAirQuality(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createAirQuality(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset, categoryIndex:number, index:number, isSignificant:boolean, pollutantsOffset:flatbuffers.Offset, previousDayComparison:ComparisonType, primaryPollutant:PollutantType, scaleOffset:flatbuffers.Offset):flatbuffers.Offset {
  AirQuality.startAirQuality(builder);
  AirQuality.addMetadata(builder, metadataOffset);
  AirQuality.addCategoryIndex(builder, categoryIndex);
  AirQuality.addIndex(builder, index);
  AirQuality.addIsSignificant(builder, isSignificant);
  AirQuality.addPollutants(builder, pollutantsOffset);
  AirQuality.addPreviousDayComparison(builder, previousDayComparison);
  AirQuality.addPrimaryPollutant(builder, primaryPollutant);
  AirQuality.addScale(builder, scaleOffset);
  return AirQuality.endAirQuality(builder);
}
}