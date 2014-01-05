---
layout: post
title: "生产 8M firmware"
date: 2014-01-05 10:01
comments: true
categories: 
---
#for 8M flash
	rm firmware.bin
	dd if=tuboot.bin of=firmware.bin bs=512 count=512 seek=0
	#128 u-boot-env
	dd if=ap121-2.6.31-squashfs of=firmware.bin bs=512 count=6144 seek=640
	dd if=vmlinux.lzma.uImage of=firmware.bin bs=512 count=2944 seek=6784
	#128 NVRAM
	dd if=app.squashfs of=firmware.bin bs=512 count=3200 seek=9856
	dd if=app.squashfs of=firmware.bin bs=512 count=3200 seek=13056
	dd if=caldata of=firmware.bin bs=512 count=128 seek=16256