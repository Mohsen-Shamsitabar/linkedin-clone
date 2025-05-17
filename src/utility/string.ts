const joinEncodedSegments = (segments: string[], separator: string = "/") =>
  encodeURIComponent(segments.join(separator));

const joinDecodedSegments = (segments: string[], separator: string = "/") =>
  decodeURIComponent(segments.join(separator));

export { joinDecodedSegments, joinEncodedSegments };
