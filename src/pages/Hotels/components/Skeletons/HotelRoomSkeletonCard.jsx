import { Skeleton, Stack } from "@mui/material";

export function HotelRoomSkeletonCard() {
  return (
    <Stack spacing={1} className=" px-2">
      <Skeleton
        height={190}
        animation="wave"
        variant="rectangular"
        width={1120}
      />
      <Skeleton variant="rectangular" width={1120} height={20} />
      <Skeleton variant="rectangular" width={1120} height={20} />
      <div className="flex gap-6 justify-center align-middle">
        <Skeleton variant="rounded" width={183} height={50} />
        <Skeleton variant="rounded" width={183} height={50} />
        <Skeleton variant="rounded" width={183} height={50} />
        <Skeleton variant="rounded" width={183} height={50} />
        <Skeleton variant="rounded" width={183} height={50} />
      </div>
      <Skeleton
        height={70}
        animation="wave"
        variant="rectangular"
        width={1120}
      />
    </Stack>
  );
}
