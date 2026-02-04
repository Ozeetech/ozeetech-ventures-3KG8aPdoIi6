"use client"

import type React from "react"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl?: string
  onPageChange?: (page: number) => void
}

export function Pagination({ currentPage, totalPages, baseUrl, onPageChange }: PaginationProps) {
  // Don't show pagination if there's only one page
  if (totalPages <= 1) return null

  // Calculate which page numbers to show
  const getPageNumbers = () => {
    const pageNumbers = []

    // Always show first page
    pageNumbers.push(1)

    // Calculate range around current page
    let rangeStart = Math.max(2, currentPage - 1)
    let rangeEnd = Math.min(totalPages - 1, currentPage + 1)

    // Adjust range to always show 3 pages if possible
    if (rangeEnd - rangeStart < 2) {
      if (rangeStart === 2) {
        rangeEnd = Math.min(totalPages - 1, rangeStart + 2)
      } else if (rangeEnd === totalPages - 1) {
        rangeStart = Math.max(2, rangeEnd - 2)
      }
    }

    // Add ellipsis before range if needed
    if (rangeStart > 2) {
      pageNumbers.push("ellipsis-start")
    }

    // Add range pages
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pageNumbers.push(i)
    }

    // Add ellipsis after range if needed
    if (rangeEnd < totalPages - 1) {
      pageNumbers.push("ellipsis-end")
    }

    // Always show last page if more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  const handleClick = (page: number) => {
    if (onPageChange) {
      onPageChange(page)
    }
  }

  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center space-x-2">
        {/* Previous button */}
        {currentPage > 1 ? (
          baseUrl ? (
            <Button variant="outline" size="icon" asChild>
              <Link href={`${baseUrl}?page=${currentPage - 1}`}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="icon" onClick={() => handleClick(currentPage - 1)}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
          )
        ) : (
          <Button variant="outline" size="icon" disabled>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
        )}

        {/* Page numbers */}
        {pageNumbers.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <Button key={`ellipsis-${index}`} variant="outline" size="icon" disabled>
                <span>...</span>
              </Button>
            )
          }

          const pageNum = page as number
          return (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? "default" : "outline"}
              size="icon"
              onClick={baseUrl ? undefined : () => handleClick(pageNum)}
              asChild={baseUrl ? true : false}
            >
              {baseUrl ? <Link href={`${baseUrl}?page=${pageNum}`}>{pageNum}</Link> : <span>{pageNum}</span>}
            </Button>
          )
        })}

        {/* Next button */}
        {currentPage < totalPages ? (
          baseUrl ? (
            <Button variant="outline" size="icon" asChild>
              <Link href={`${baseUrl}?page=${currentPage + 1}`}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="icon" onClick={() => handleClick(currentPage + 1)}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          )
        ) : (
          <Button variant="outline" size="icon" disabled>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        )}
      </div>
    </div>
  )
}

export const PaginationContent = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap items-center gap-1">{children}</div>
)

export const PaginationItem = ({ children }: { children: React.ReactNode }) => <div>{children}</div>

export const PaginationLink = ({
  href,
  isActive = false,
  children,
}: {
  href: string
  isActive?: boolean
  children: React.ReactNode
}) => (
  <Button asChild variant={isActive ? "default" : "outline"} size="icon">
    <Link href={href}>{children}</Link>
  </Button>
)

export const PaginationEllipsis = () => (
  <div className="flex h-9 w-9 items-center justify-center">
    <div className="h-4 w-4 text-muted-foreground">...</div>
  </div>
)

export const PaginationPrevious = ({ href }: { href: string }) => (
  <Button asChild variant="outline" size="icon">
    <Link href={href}>
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous page</span>
    </Link>
  </Button>
)

export const PaginationNext = ({ href }: { href: string }) => (
  <Button asChild variant="outline" size="icon">
    <Link href={href}>
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next page</span>
    </Link>
  </Button>
)
