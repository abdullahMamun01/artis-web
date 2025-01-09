        <motion.div
          className="w-4 h-16 bg-white origin-bottom mr-2 mt-[-1]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: showFull ? 1 : 0,
            scale: showFull ? 1 : 0,
            rotate: -35,
          }}
          transition={{
            duration: 0.5,
            delay: 0.7,
          }}
        /> 